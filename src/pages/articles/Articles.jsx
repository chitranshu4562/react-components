import classes from "./Articles.module.css";
import MyButton from "../../components/my-button/MyButton.jsx";
import Article from "../../components/article/Article.jsx";
import {useContext, useState} from "react";
import ArticleForm from "../../components/article-form/ArticleForm.jsx";
import {generateUniqueId} from "../../utils.js";

export default function Articles() {
    const [showForm, setShowForm] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState(null);
    const [articles, setArticles] = useState([
        {id: 1730428028116, title: 'First article', description: 'First description'},
        {id: 1730428070061, title: 'Second article', description: 'Second description'},
    ]);

    const displayForm = () => {
        setShowForm(true);
    }

    const hideForm = () => {
        setShowForm(false);
    }

    const handleAddArticle = (values) => {
        const articleData = {
            id: generateUniqueId(),
            ...values
        }

        setArticles(prevState => [...prevState, articleData]);
        hideForm();
    }

    const handleEditForm = (article) => {
        setShowForm(true);
        setArticleToEdit(article);
    }

    const handleEditArticle = (editedArticle) => {
        setArticles(prevState => {
            return prevState.map(article => {
                return article.id === articleToEdit.id ? {...article, title: editedArticle.title, description: editedArticle.description} : article
            })
        })
        hideForm();
    }

    const handleDeleteArticle = (id) => {
        if (confirm('Are you want to delete ?')) {
            setArticles(prevState => {
                return prevState.filter(article => article.id !== id)
            })
        }
    }

    return (
        <>
            <div className="d-flex justify-content-end p-2">
                <MyButton onClick={displayForm}>Add Article</MyButton>
            </div>

            {(showForm && !articleToEdit) && <ArticleForm onSubmit={handleAddArticle} onClose={hideForm}/>}
            {(showForm && articleToEdit) && (
                <ArticleForm
                    title={articleToEdit.title}
                    description={articleToEdit.description}
                    isEdit={true}
                    onSubmit={handleEditArticle}
                    onClose={hideForm}
                />
            )}

            <div className="d-flex">
                {articles.map(article => {
                    return (
                        <Article key={article.id} article={article}>
                            <div className="d-flex justify-content-center gap-2">
                                <MyButton onClick={() => handleEditForm(article)}>Edit</MyButton>
                                <MyButton onClick={() => handleDeleteArticle(article.id)}>Delete</MyButton>
                            </div>
                        </Article>
                    )
                })}
            </div>
        </>
    )
}
