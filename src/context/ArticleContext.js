import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = "https://win23-assignment.azurewebsites.net/api/articles";

    useEffect(() => {
        getArticles();      
    }, []);

    const getArticles = async () => {
        const result = await fetch(url);
        setArticles(await result.json());
        setLoading(false);
    }

    const getArticle = async (id) => {
        const result = await fetch(`${url}/${id}`);
        setArticle(await result.json());
    }

    return (
        <ArticleContext.Provider value = {{articles, article, getArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}
