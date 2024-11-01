import MyContainer from "../my-container/MyContainer.jsx";

export default function Article({ article, children }) {
    return (
        <>
            <MyContainer>
                <h6>{article.title}</h6>
                <p>{article.description}</p>
                { children }
            </MyContainer>
        </>
    )
}
