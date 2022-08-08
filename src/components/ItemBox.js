import "./ItemBox.css";
const ItemBox = ({ date, text }) => {
  return (
    <>
      <div className="item-box">
        {date}
        {text}
      </div>
    </>
  );
};

export default ItemBox;
