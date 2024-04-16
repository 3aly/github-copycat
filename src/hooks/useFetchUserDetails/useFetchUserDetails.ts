import { queryUserDetails } from "@services/index";
import { UseQueryOptions, useQuery } from "react-query";

export const useFetchUserDetails = ({
  username,
  onSuccess,
  ...rest
}: {
  username?: string;
  onSuccess?: (data: any) => void;
  rest?: UseQueryOptions<{ genres: [] }, []>;
}) => {
  const query = useQuery({
    queryKey: ["useFetchUserDetails", username],
    queryFn: () => queryUserDetails(username),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
