import React from 'react';

// class RepoList extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     return(
//       <div>
//         <h4> Repo List Component </h4>
//         There are {props.repos.length} repos.
//         Here they are! {props.repos}
//       </div>
//     );
//   }
// }

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    Here they are! {props.repos}
  </div>
)

export default RepoList;