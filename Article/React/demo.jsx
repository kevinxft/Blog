const Person = props => <div>{props.name}</div>;

const identity = BaseComponent => BaseComponent;

const List = ({ data }) => (
  <ul>{data.map(item => <li key={item.name}>{item.name}</li>)}</ul>
);
const withLoading = BaseComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? <div>Loading....</div> : <BaseComponent {...otherProps} />;

const flatten = propKey => BaseComponent => props => (
  <BaseComponent {...props} />
);

const LoadingList = withLoading(List);

const FlatternLoadingList = flatten("list")({ LoadingList })

const EnhanceList = withRouter(FlatternLoadingList);

const EnhanceList2 = withRouter(flatten("list")(withLoading("list")));
