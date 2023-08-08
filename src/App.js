import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default function App() {
  const [ShowAddFriend, setShowAddFriend] = useState(false);

  const HandleShowAddFriend = () => {
    return setShowAddFriend((show) => !show);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {ShowAddFriend && <FormAddFriend />}
        <Button onClick={HandleShowAddFriend}>
          {ShowAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

const FriendList = () => {
  const friend = initialFriends;
  return (
    <ul>
      {friend.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You Own {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
};

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" />

      <label>🖼️Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <label>💸 Bill value</label>
      <input type="text" />

      <label>👤Your expense</label>
      <input type="text" />

      <label>👩🏻‍🤝‍👩🏼X's expense</label>
      <input type="text" disabled />

      <label>🤑Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};
