import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BreakingNews from "./components/BreakingNews";
import MainSection from "./components/MainSection";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";

function App() {
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <div className="main">
      <Header />
      <NavBar setCategory={setCategory} />
      <BreakingNews />

      {article ? (
        <Article articleHeadline={article} setArticle={setArticle} />
      ) : category ? (
        <ArticleList category={category} setArticle={setArticle} />
      ) : (
        <>
          <MainSection setArticle={setArticle} />
          <NewsContainer setArticle={setArticle} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
