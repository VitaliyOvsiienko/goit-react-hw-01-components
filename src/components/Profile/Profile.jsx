import PropTypes from 'prop-types';
import { ProfileWrapper, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes, }) => {
    
    return (
<ProfileWrapper>
      <div className="description">
        <Avatar src={avatar} alt={username + 'avatar'} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
    )

}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
    
};