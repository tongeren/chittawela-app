// Custom error pages
export interface ErrorProps {
    statusCode: number
}

const Error = ({ statusCode }):React.ReactElement => {
    return (
      <p>
        { statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : (
        err ? err.statusCode : 404
    );
    return { statusCode }
}

Error.displayName = "Error";

export default Error;