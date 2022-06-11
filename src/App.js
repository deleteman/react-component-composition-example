import logo from './logo.svg';
import './App.css';
import BlogPosts from './components/BlogPosts';
import ListLayout from './components/ListLayout';
import Paginator from './components/Paginator';

const articles = [
    {title: "article 1", link: "http://www.google.com"},
    {title: "article 2", link: "http://www.google.com"},
    {title: "article 3", link: "http://www.google.com"},
    {title: "article 4", link: "http://www.google.com"},
    {title: "article 5", link: "http://www.google.com"},
    {title: "article 6", link: "http://www.google.com"},
    {title: "article 7", link: "http://www.google.com"},
    {title: "article 8", link: "http://www.google.com"},
    {title: "article 9", link: "http://www.google.com"},
    {title: "article 10", link: "http://www.google.com"},
    {title: "article 11", link: "http://www.google.com"},
]


function App() {
  return (
    <div className="App">
      <h1>My blog!</h1>
      <BlogPosts articles={articles} >
        <ListLayout />
        <Paginator />
      </BlogPosts>
    </div>
  );
}

export default App;
