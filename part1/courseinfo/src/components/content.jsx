import Part from "./part";

const Content = (props) => {
    return (
      <div>
       <p> <Part part={props.parts[0]} exercises={props.parts[0].exercises}/> </p>
       <p> <Part part={props.parts[1]} exercises={props.parts[1].exercises}/> </p>
       <p> <Part part={props.parts[2]} exercises={props.parts[2].exercises}/> </p>
        </div>
    );
  };

  export default Content;