import React, { Component, PropTypes } from 'react';
import ArticleCollection from '../models/ArticleCollection';
import ArticleModel from '../models/ArticleModel';
import data from '../data';
import './articleTemplate.styles.scss';

const articles = new ArticleCollection(data.articles);

class ArticleTemplate extends Component {
  render() {

    const pathName = this.props.routeParams.articleName;
    const article = articles.findByPathName(pathName);

    return (
      <div>
        <h1 className="title">{article.getTitle()}</h1>
        <h2 className="date">{article.getDate()}</h2>
        <p>{article.getText()}</p>
      </div>
    );
  }
}

export default ArticleTemplate;
