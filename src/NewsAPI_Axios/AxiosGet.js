import React, {useState} from 'react'
import axios from 'axios'
const AxiosGet = () => {

    const [news, setNews] = useState([]);

    const fetchNews = () => {
       
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=a9b07d98dc8f4496bcfbb45383f8b5a5')
            .then((response) => {
                console.log(response)
                setNews(response.data.articles);

            })
    }
    return (
        <>
            <div>AxiosGet</div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={fetchNews}>Fetch News</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            news.map((data) => {
                                return (
                                    <div className="col-4 mb-5">
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={data.urlToImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">{data.description}</p>
                                                <a href={data.url} className="btn btn-primary">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default AxiosGet