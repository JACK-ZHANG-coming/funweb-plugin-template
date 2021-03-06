import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
  mutation mutations_UpdateAppMutation($id:ID!, $name: String!, $space: AppSpace!, $type: AppType!, $mode: AppMode!, $url: String, $packageid: ID, $remark: String) {
    updateApp(id: $id, name: $name, space: $space, type: $type, mode: $mode, url: $url, packageid: $packageid, remark: $remark) {
      id
      name
      space
      type
      mode
      url
      package{
        version
      }
      remark
    }
  }
`;

function commit(
  environment,
  id,
  name,
  space,
  type,
  mode,
  url,
  packageid,
  remark,
  onCompleted,
  onError
) {
  return commitMutation(environment, {
    mutation,
    variables: {
      id: id,
      name: name,
      space: space,
      type: type,
      mode: mode,
      url: url,
      packageid: packageid,
      remark: remark
    },
    onCompleted: onCompleted,
    onError: onError
  }
  );
}

export default { commit };