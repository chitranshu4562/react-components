import {useState} from "react";
import MyInput from "../my-input/MyInput.jsx";
import MyButton from "../my-button/MyButton.jsx";
import MyContainer from "../my-container/MyContainer.jsx";
import classes  from "./ArticleForm.module.css";

export default function ArticleForm({ title = '', description = '', onClose, onSubmit, isEdit = false }) {
    const [articleForm, setArticleForm] = useState({
        title: title,
        description: description
    })

    const handleInputChange = (event) => {
        setArticleForm(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(articleForm);
        handleResetForm();
    }

    const handleResetForm = () => {
        setArticleForm({
            title: '',
            description: ''
        })
    }

    return (
        <MyContainer classNames="w-50 mx-auto">
            <h3 className="text-center">{isEdit ? 'Edit' : 'Add'} Article</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="title">Title</label>
                    <MyInput
                        id="title"
                        type="text"
                        name="title"
                        value={articleForm.title}
                        placeholder="Enter title"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group my-2">
                    <label htmlFor="description">Description</label>
                    <MyInput
                        id="description"
                        type="text"
                        name="description"
                        value={articleForm.description}
                        placeholder="Enter description"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="d-flex justify-content-center gap-2">
                    <MyButton onClick={onClose}>Cancel</MyButton>
                    <MyButton type="submit" classNames={classes.submitBtn}>{isEdit ? 'Edit' : 'Add'} Article</MyButton>
                </div>
            </form>
        </MyContainer>
    )
}
