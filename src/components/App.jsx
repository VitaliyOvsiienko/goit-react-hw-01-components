import { Profile } from './Profile';
import user from './Data/user.json';

import { Statistics } from './Statistics';
import data from './Data/data.json';

import { FriendList } from './FriendList';
import friends from './Data/friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from './Data/transactions'

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};