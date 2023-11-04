const GridBox = ({ children, columns }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 15,
        padding: 15,
      }}
    >
      {children}
    </div>
  );
};

export default GridBox;
