import * as React from 'react';
import { withRouter, RouteComponentProps, Route} from 'react-router-dom';

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const UnauthenticatedLayout = ({component: Component, ...otherProps}: IProps) => {
  return (
    <>
      <div className="main">
        <Route
          render={otherProps => (
            <>
              <Component {...otherProps} />
            </>
          )}
        />
      </div>
    </>
  );
};

export default withRouter(UnauthenticatedLayout);
