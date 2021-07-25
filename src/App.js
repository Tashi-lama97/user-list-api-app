import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DynamicPagination from "./components/DynamicPagination";
import UserCard from "./components/UserCard";
import CustomAlert from "./components/CustomAlert";
import Spinner from "./components/Spinner";

const App = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [otherData, setOtherData] = useState({});

  const getPage = (val) => {
    setPage(val);
  };

  const apiCall = async (source) => {
    try {
      setLoading(true);
      let data = await axios.get(`https://reqres.in/api/users?page=${page}`, {
        cancelToken: source.token,
      });
      if (data.status === 200) {
        data = data.data;
        setUsers(data.data);
        let extra = {
          page: data.page,
          current: data.per_page * data.page,
          total: data.total,
          total_pages: data.total_pages,
        };
        setOtherData(extra);
        setPages(data.total_pages);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    let source = axios.CancelToken.source();
    apiCall(source);
    return () => {
      source.cancel("Request Cancled");
    };
  }, [page]);

  return (
    <section className="container">
      <section className="heading">
        <p className="sides"></p>
        <h4>List of Users</h4>
        <p className="sides" style={{ marginRight: "4px" }}>
          {otherData.current}/{otherData.total}
        </p>
      </section>
      <section className="userList">
        {error === true ? (
          <div>
            <CustomAlert sev="error" message="Somethimg went wrong" />
          </div>
        ) : loading === true ? (
          <div>
            <Spinner />
          </div>
        ) : users.length > 0 ? (
          users.map((data) => (
            <UserCard
              firstName={data.first_name}
              lastName={data.last_name}
              mail={data.email}
              avatar={data.avatar}
            />
          ))
        ) : (
          <div>
            <CustomAlert message="No User Found" />
          </div>
        )}
      </section>
      {error === false && (
        <section className="pagination">
          <DynamicPagination pages={pages} getPage={getPage} />
        </section>
      )}
    </section>
  );
};

export default App;
