import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import employeService from "../services/EmployeServices";
import { ActivityIndicator, Card } from "react-native-paper";
import { DataTable } from "react-native-paper";

export default function ListEmployeScreen(): JSX.Element {
  const { data, isFetching } = useQuery("listEmploye", async () => {
    return await employeService.getAll();
  });
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 8, 10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage, data]);

  if (data) {
    console.log(data);
  }

  if (isFetching) {
    return <ActivityIndicator size="large" />;
  }

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data ? data.length : 0);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Nom</DataTable.Title>
      </DataTable.Header>
      {data &&
        data.slice(from, to).map((item: any) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>
              <Card>
                <Card.Content>{item.nom}</Card.Content>
              </Card>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      {data && data.length === 0 && <Text>Aucun employé</Text>}
      {data && data.length > 0 && (
        <>
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </>
      )}
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
