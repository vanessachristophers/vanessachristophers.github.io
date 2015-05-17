import React from 'react';

const
  colors =
    { darkest:   '#242830',
      dark:      '#353535',
      green:     '#3DC9B3',
      greenDark: '#309383',
      greyLight: '#f3f5f8',
      greyDark:  '#a1a9b0'}

const
  {div, h1, h3, h4, p, hr} = React.DOM,
  lorem25 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officia ad? Error asperiores eos vitae est consectetur, hic libero labore. Voluptate magni fugiat sit fugit!',

  mkPost = (title, content) => {return {title, content}},
  posts =
    [mkPost('My First post',lorem25),
     mkPost('My Second post',lorem25)],

  showPost = ({title, content}) => {
    return(
      div(
        { key: title },
        h3({style: { color: '#333' }}, title),
        p({style: { color: '#444' }},content)
      )
    );
  },
  showPosts = (posts) => posts.map(showPost),
  blog =
    div(
      { style:
          { marginLeft: 'auto',
            marginRight: 'auto',
            width: '80vw' } },
      h1(null, 'Vanessa Christophers'),
      showPosts(posts)
    );

React
  .render(blog, document.getElementById('application-main'))
