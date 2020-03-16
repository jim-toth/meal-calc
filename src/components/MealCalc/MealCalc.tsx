import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

interface RootState {
  apiKey: string
};

const mapStateToProps = (state: RootState) => {
  return {
    apiKey: state.apiKey
  }
};

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function MealCalc(props: Props) {
  return (
    <div className="MealCalc">
      MealCalculator
    <label>Api Key: {props.apiKey}</label>
    </div>
  );
}

export default connector(MealCalc);
