import { FriendList } from "./FriendList";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import user from "../user.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userInfo={user} />
      <Statistics />
      <FriendList/>
      React homework template
    </div>
  );
};

