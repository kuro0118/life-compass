import { storage } from "../plugins/firabase"
import getSystemDate from "./getSystemDate";

const uploadToStorage = ({ name, image }, currentUser) => {

    const uploadFileName = getSystemDate()
        + currentUser.userID
        + "."
        + "png"
    const uploadFilePath = `images/${currentUser.userID}/${uploadFileName}`
    let saveFileURL = "";

    // chips: uploadTaskのコールバック処理を定義
    const next = snapshot => {
        // 進行中のsnapshotを得る
        // アップロードの進行度を表示
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        console.log(snapshot);
    };
    const error = error => {
        // エラーハンドリング
        console.log(error);
    };
    const complete = () => {
        // 完了後の処理
        // 画像表示のため、アップロードした画像のURLを取得
        // chips: .refでディレクトリを指定し、.childで指定のファイル名を参照..という方法も出来る。
        //        今回は.refでファイルフルパスで取ってくる
        storage
            .ref(uploadFilePath)
            .getDownloadURL()
            .then(fireBaseUrl => {
                console.log(saveFileURL);
                console.log("test")
                // 状態を更新
                const newImage = {
                    name: name,
                    image: image,
                    imageURL: fireBaseUrl
                }
                return newImage
            });
    };

    // アップロード処理
    var storageRef = storage.ref();
    var chiledRef = storageRef.child(uploadFilePath);
    const uploadTask = chiledRef.put(image);
    uploadTask.on(
        "state_changed",
        next,
        error,
        complete
    );

}

export default uploadToStorage