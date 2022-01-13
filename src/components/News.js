import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor() {
        super();
        console.log("i am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        console.log("componentDidMount");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f22f35abffc24ce7b020d8755ef6ad1d&page=1";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles ,totalResults: parseData.totalResults})

    }


    handlePrevClick = async() => {
        console.log("previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f22f35abffc24ce7b020d8755ef6ad1d&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
      

        this.setState({
            page: this.state.page -1,
             articles: parseData.articles 
        })

    }
    handleNextClick = async() => {
        console.log("Next");
        
            if(this.state.page+1> Math.ceil(this.state.totalResults/20))
            {

            }

            else{
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f22f35abffc24ce7b020d8755ef6ad1d&page=${this.state.page + 1}&pageSize=20`;


                let data = await fetch(url);
                let parseData = await data.json()
                console.log(parseData);
               
        
                this.setState({
                    page: this.state.page +1,
                     articles: parseData.articles 
                })
            }
       

    }


    render() {
        return (
            <div className='container my-3'>
                <h1>NewsMonkey-Topheadline</h1>

                <div className="row">

                    {this.state.articles.map((element) => {

                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>

                    })}
                    <div>
                        <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} > &larr;previous</button>
                            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>

                        </div>
                    </div>


                </div>



            </div>
        )
    }
}

export default News
