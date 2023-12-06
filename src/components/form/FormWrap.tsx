import { parsStringToWalletList } from '../../utils/parse-string-to-wallet-list';
import Form from './Form';

export default function FormWrap() {
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDragCapture = (event:React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      if (file.type === 'text/csv') {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            const data = reader.result;
            const walletList = parsStringToWalletList(data);
            console.log(walletList);
          }
        };
      } else {
        console.log(`формат файла должен быть "csv", получили ${file.type}`);
      }
    }
  };

  return (
    <div
      className="drug-wallet-list-zone"
      onDragOver={onDragOver}
      onDrop={onDragCapture}
    >
      <Form />
    </div>
  );
}
