import { CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";
import { useQueries } from "react-query";
import { extractIdFromUrl } from "../../helpers";

interface Props<T> {
  title: string;
  resource: string;
  queryFn: (...args: any) => Promise<T>;
  queryKey: string;
  items: string[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, queryFn, queryKey, resource, title, renderItem }: Props<T>) => {
  const queries = useQueries(
    items.map((item) => {
      let id = extractIdFromUrl(item, resource);

      return {
        queryKey: [queryKey, id],
        queryFn: () => queryFn(id),
        refetchOnWindowFocus: false,
      };
    })
  );

  return (
    <CCol lg={{ span: 3 }}>
      <CCard
        style={{
          height: "17.6rem",
        }}
        className="mb-4 mb-md-0"
      >
        <CCardHeader>
          <p className="mb-4">
            <span className="text-primary font-italic me-1">{title}</span>
          </p>
        </CCardHeader>
        <CCardBody
          style={{
            overflowY: "auto",
          }}
        >
          {queries.map((query) => {
            if (!query.isLoading && !query.isError && query.data) return renderItem(query.data);
          })}
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default List;
