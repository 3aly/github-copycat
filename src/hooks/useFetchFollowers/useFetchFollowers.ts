import { queryFollowers } from "@services/index";
import { UseQueryOptions, useQuery } from "react-query";

export const useFetchFollowers = ({
  username,
  onSuccess,
  ...rest
}: {
  username: string;
  onSuccess?: (data: any) => void;
  rest?: UseQueryOptions<{ genres: [] }, []>;
}) => {
  const query = useQuery({
    queryKey: ["useFetchFollowers", username],
    queryFn: () => queryFollowers(username),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
