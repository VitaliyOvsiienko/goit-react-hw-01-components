import { Profile } from "./Profile/Profile";
import user from 'user.json';
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </Container>
  );
};

