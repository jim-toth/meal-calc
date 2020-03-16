import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { setApiKey } from '../../store/actions';

interface RootState {
  apiKey: string
};

const mapStateToProps = (state: RootState) => {
  return {
    apiKey: state.apiKey
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSetApiKey: (apiKey: string) => {
      dispatch(setApiKey(apiKey));
    }
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const ApiKeyForm = (props: Props) => {
  const [apiKey, setApiKey] = useState(props.apiKey);

  return (
    <div className="ApiKeyInput">
      <div>
        <label>API Key:</label>
        <input
          type="text"
          placeholder="Enter your API key"
          defaultValue={props.apiKey}
          onChange={(evt) => setApiKey(evt.target.value)} />
        </div>
      <div><button onClick={() => props.onSetApiKey(apiKey)}>Enter</button></div>
    </div>
  );
};

export default connector(ApiKeyForm);
