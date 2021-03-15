export const ListOfVotes = ({votes, letter}) => {
  return (
    <div className="votes">
      <h3>Team {letter}</h3>
      {votes.map((vote) => {
        return (
          <div key={vote.id} className="vote">
            <div className="photo-name">
              <img alt={vote.name} src={vote.photoURL} />
              <span>{vote.name}</span>
            </div>
            <div className="comment">
              <p>{vote.productReview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
