import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from 'user.json';
import data from 'data.json';
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

      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};

