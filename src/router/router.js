import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import Categories from "./pages/Categories";
import EditCategory from "./pages/EditCategory";
import CategoryDetails from "./pages/CategoryDetails";
import AddCategory from "./pages/AddCategory";

const routes = [
  {
    name: "/",
    element: () => <Books />,
  },
  {
    name: "/add-book",
    element: () => <AddBook />,
  },
  {
    name: "*",
    element: () => <NotFoundPage />,
  },
  {
    name: "/book-details/:bookId",
    element: () => <BookDetails />,
  },
  {
    name: "/edit-book/:bookId",
    element: () => <EditBook />,
  },
  {
    name: "/categories-page",
    element: () => <Categories />,
  },
  {
    name: "/edit-category/:categoryId",
    element: () => <EditCategory />,
  },
  {
    name: "/category-details/:categoryId",
    element: () => <CategoryDetails />,
  },
  {
    name: "/add-category",
    element: () => <AddCategory />,
  }
];

export default routes