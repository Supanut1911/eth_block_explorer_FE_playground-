import { FC } from "react";
import moment from "moment";
import styles from "../styles/Home.module.css";
import { Stringifier } from "postcss";
interface PropTyep {
  result: {
    result: any;
    searchInput: string;
  };
}

interface TxType {
  hash: string;
  nonce: string;
  transaction_index: string;
  from_address: string;
  from_address_label: string;
  to_address: string;
  to_address_label: null;
  value: string;
  gas: string;
  gas_price: string;
  input: string;
  receipt_cumulative_gas_used: string;
  receipt_gas_used: string;
  receipt_contract_address: null;
  receipt_root: null;
  receipt_status: string;
  block_timestamp: Date;
  block_number: string;
  block_hash: string;
  transfer_index: number[];
  logs: any[];
  decoded_call: {
    label: String;
  };
}

const SearchResult = (props: PropTyep) => {
  const resultData = props.result.result.result;
  const resultSearchInput = props.result.searchInput;
  console.log(
    "🚀 ~ file: searchResult.tsx:13 ~ SearchResult ~ resultData:",
    resultData
  );

  return (
    <section className={styles.searchResults}>
      <p className={styles.amountOfTransactions}>
        Latest 25 from a total of{" "}
        <span className={styles.blueText}>{resultData.length} </span>
        transactions
      </p>
      <table className={styles.txnSection}>
        <thead>
          <tr className={styles.txnTitle}>
            <th>Transaction Hash</th>
            <th>Method</th>
            <th>Block</th>
            <th className={styles.blueText}>Age</th>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th>Value</th>
            <th className={styles.blueText}>Txn Fee</th>
          </tr>
        </thead>
        {resultData.map((txn: TxType) => {
          return (
            <tr className={styles.txn} key={txn.hash}>
              <td className={styles.blueText}>{txn.hash.slice(0, 16)}...</td>
              <td>
                <span className={styles.transfer}>
                  {txn.decoded_call ? txn.decoded_call.label : "unknow"}
                </span>
              </td>
              <td className={styles.blueText}>{txn.block_number}</td>
              <td>{moment(txn.block_timestamp, "YYYYMMDD").fromNow()}</td>
              <td>
                {txn.from_address.slice(0, 8)}...{txn.from_address.slice(34)}
              </td>
              <td>
                <span
                  className={`
                    ${
                      txn.from_address.toLocaleLowerCase() !==
                      resultSearchInput.toLocaleLowerCase()
                        ? styles.inTxn
                        : styles.outTxn
                    }
                  `}
                >
                  {txn.from_address.toLocaleLowerCase() !==
                  resultSearchInput.toLocaleLowerCase()
                    ? "IN"
                    : "OUT"}
                </span>
              </td>
              <td className={styles.blueText}>
                {txn.to_address.slice(0, 8)}...{txn.to_address.slice(34)}
              </td>
              <td>{(+txn.value / 10 ** 18).toFixed(5)} ETH</td>
              <td>{(+txn.gas_price / 10 ** 18).toFixed(12)} ETH</td>

              <td className={styles.blueText}>
                {txn.from_address.slice(0, 8)}...{txn.from_address.slice(34)}
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default SearchResult;
