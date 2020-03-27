import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { setApiKey } from '../../store/actions';

interface RootState {
  apiKey: string,
  isApiKeyValid: boolean
};

const mapStateToProps = (state: RootState) => {
  return {
    apiKey: state.apiKey,
    isApiKeyValid: state.isApiKeyValid
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
  const [apiKey, _setApiKey] = useState(props.apiKey);
  const [isApiKeyValid] = useState(props.isApiKeyValid);

  return (
    <div className="ApiKeyInput">
      <div>
        <label>API Key: </label>
        <input
          type="text"
          placeholder="Enter your API key"
          defaultValue={props.apiKey}
          onChange={(evt) => _setApiKey(evt.target.value)} />
        <button onClick={() => props.onSetApiKey(apiKey)}>Enter</button>
        <span id="apiKeyStatus">{isApiKeyValid ? '✔️' : '❌' }</span>
      </div>
    </div>
  );
};

export default connector(ApiKeyForm);
