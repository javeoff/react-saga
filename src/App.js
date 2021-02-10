import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

const posts = [
  {
    title: '123',
    id: 1,
  },
  {
    title: '121233',
    id: 2,
  },
]

function App() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col">
          <button className="btn btn-success">Кнопка 1</button>
        </div> */}
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Синхрон Посты</p>
          <Posts />
        </div>
        <div className="col">
          <p>Асинхрон Посты</p>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
