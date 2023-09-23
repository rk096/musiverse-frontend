import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/ServerHelpers";
import { makeAuthenticatedImageUpload } from "../utils/ServerHelpers";
import { useNavigate } from "react-router-dom";
import ImageUpload from '../components/shared/ImageUpload';
import LoggedInContainer from '../containers/LoggedInContainer';

const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();


    const submitSong = async () => {
        let imgPath = "";
        if (!playlistUrl || !name || !thumbnail) {
            alert('Please fill all the details');
            return;
        }
        try {
            const response = await makeAuthenticatedImageUpload('/upload/img', thumbnail);
            console.log(response.path);
            imgPath = response.path;
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image. Please try again.');
        }

        const data = { name, "thumbnail": imgPath, track: playlistUrl, "file": thumbnail };
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
     
        <LoggedInContainer curActiveScreen="UploadSong">
            <div className='content p-8 overflow-auto'>

                <div className='text-2xl font-semibold mb-5 text-white mt-8'>
                    Upload Your Music
                </div>
                <div className="w-2/3">
                    <div className="w-1/2 my-8">
                        <TextInput
                            // label="Name"
                            labelClassName={"text-white"}
                            placeholder="Name"
                            value={name}
                            setValue={setName}
                        />
                    </div>
                </div>
                <div className='flex items-center'>

                    <div>
                        <ImageUpload setImg={setThumbnail} />
                    </div>
                    <div className='pt-5'>

                        {uploadedSongFileName ? (
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName}
                            />
                        )}

                    </div>
                </div>

                <div
                    className="bg-white my-5 w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                    onClick={submitSong}
                >
                    Submit Song
                </div>

            </div>
    
    </LoggedInContainer>
    
    );
    
}


export default UploadSong;