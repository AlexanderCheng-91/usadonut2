function OrderForm() {
  return (
    <>
      <div classname="form-check">
        <input
          classname="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label classname="form-check-label" for="exampleRadios1">
          Default radio
        </label>
      </div>
      <div classname="form-check">
        <input
          classname="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label classname="form-check-label" for="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div classnamename="form-check">
        <input
          classname="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          disabled
        />
        <label classname="form-check-label" for="exampleRadios3">
          Disabled radio
        </label>
      </div>
    </>
  );
}

export default OrderForm;
