import Button from "@/components/common/Button";
import Pagination from "@/components/common/Pagination";
import SearchUser from "@/components/user/SearchUser";
import UserList from "@/components/user/UserList/UserList";
import { IUser } from "@/models/IUser";
import { useEffect, useState } from "react";

interface ListContentProps {
  addUser: boolean;
  Users: IUser[];
}

const ListContent: React.FC<ListContentProps> = ({ addUser, Users }) => {
  const [order, setOrder] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //Sets items per page for pagination
  const itemsPerPage = 4;

  const sortedUsers = [...Users].sort((a, b) => Number(b.id) - Number(a.id));
  const OrderedArr = order ? sortedUsers : Users;
  const indexOfFirstProject = (currentPage - 1) * itemsPerPage;
  const indexOfLastProject = indexOfFirstProject + itemsPerPage;
  const users = Array.isArray(OrderedArr)
    ? OrderedArr.slice(indexOfFirstProject, indexOfLastProject)
    : [];

  const totalPages = Math.ceil(OrderedArr.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [order]);

  const handleOrder = () => {
    setOrder(!order);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Button
        style={{
          width: "25rem",
          color: addUser ? "red" : "var(--primary-color)",
          border: `1px solid var(--primary-color)`,
          marginBottom: "2rem",
        }}
        text={order ? "Sort by ID (Descending)" : "Sort by ID (Ascending)"}
        type="button"
        onClick={handleOrder}
      />
      <SearchUser users={OrderedArr} />
      <UserList users={users} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ListContent;
