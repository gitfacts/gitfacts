import React from 'react';
import './App.css';
import gql from 'graphql-tag'

export default class Graph extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: null
    }

  }

  async componentDidMount() {
    const { client } = this.props
    const chal = await client.query({
      query: gql`
      query listRepos{
        username: "EricBot89"
        
         search(query:"code", type:REPOSITORY, first:20){  
         repositoryCount
         pageInfo{
          endCursor
          startCursor
         }
         edges{
          node{
           ... on Repository{
            id
            name
            createdAt 
            description 
            isArchived
            isPrivate
            url
            owner{
             login
             id
             __typename
             url
            }
            assignableUsers{

             totalCount
            }
            licenseInfo{
             key
            }
            defaultBranchRef{
             target{
              ... on Commit{
               history(first:10){
                totalCount
                edges{
                 node{
                  ... on Commit{
                   committedDate
                  }
                 }
                }
               }
              }
             }
            }
           }
          }
         }
        }
       }`
  })
    console.log(chal)
  }

  render() {
    return (
      <section className="Graph">
        <article className="result">
        </article>
        <article className="result">
        </article>

        <article className="result">
        </article>
        <article className="result">
        </article>
        <article className="result">
        </article>
        <article className="result">
        </article>
        <article className="result">
        </article>
        <article className="result">
        </article>

      </section>
    );
  }
}
