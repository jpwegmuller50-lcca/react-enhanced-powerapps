import * as React from 'react';
import { Modal, Icon, DefaultButton } from 'office-ui-fabric-react';
import { modalClassNames } from './ErrorBoundary.styles';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      showModal: false
    };
  }

  public componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      error: error,
      showModal: true
    });
  }

  public render(): React.ReactElement<any> | React.ReactNode {
    const { error, showModal } = this.state;
    const { main, header, title, icon, body, footer } = modalClassNames;

    if (error) {
      return (
        <Modal isOpen={showModal} isBlocking={true} containerClassName={main}>
          <div className={header}>
            <div className={title}>
              <Icon iconName="StatusErrorFull" className={icon} /> <span>An error occurred</span>
            </div>
          </div>
          <div id="error-text" className={body}>
            {error && error.toString()}
          </div>
          <div className={footer}>
            <DefaultButton onClick={this._handleOnClick} text="Close" />
          </div>
        </Modal>
      );
    }

    // normally, just render children
    return this.props.children;
  }

  private _handleOnClick = (): void => {
    this.setState({ showModal: false });
  };
}
