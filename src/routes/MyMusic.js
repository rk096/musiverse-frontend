import logo from '../logo.png'
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWitHover';
import { Icon } from "@iconify/react";
import SingleSongCard from "../components/shared/SingleSongCard";
import {makeAuthenticatedGETRequest} from "../utils/ServerHelpers";
import {useState, useEffect} from "react";


const MyMusic = () => {

    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    }, []);


    return (<div className="h-full w-full flex">
        {/* left panel */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            <div>

                {/* logo */}
                <div className="logo p-5 w-full flex items-center justify-center">
                    <img src={logo} width="50" height="50" className="mr-2" alt="logo" />
                    <h1 className="text-2xl font-semibold text-center text-white">Musiverse</h1>

                </div>
                <div className='pt-5'>

                    <IconText
                        iconName={"material-symbols:home"}
                        displayText={"Home"}
                       
                    />
                    <IconText
                        iconName={"material-symbols:search-rounded"}
                        displayText={"Search"}
                    />
                    <IconText
                        iconName={"icomoon-free:books"}
                        displayText={"Library"}
                    />
                    <IconText
                        iconName={"material-symbols:library-music-sharp"}
                        displayText={"My Music"}
                        active 
                    />
                </div>
                <div className="pt-5">
                    <IconText
                        iconName={"material-symbols:add-box"}
                        displayText={"Create Playlist"}
                    />
                    <IconText
                        iconName={"mdi:cards-heart"}
                        displayText={"Liked Songs"}
                    />
                </div>
            </div>
            <div className="px-5">
                <div className="border border-gray-400 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="carbon:earth-europe-africa" />
                    <div className="ml-2 text-sm font-semibold">
                        English
                    </div>
                </div>
            </div>
        </div>
        {/* right panel */}
        <div className='h-full w-4/5 bg-app-black overflow-auto'>
            <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                <div className='w-1/2 flex h-full'>
                    <div className='w-2/3 flex justify-around items-center'>
                        <TextWithHover displayText={"Premium"} />
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className='h-1/2 border border-white'></div>
                    </div>
                    <div className='w-1/3 flex justify-around h-full items-center'>
                        <TextWithHover displayText={"Upload Songs"} />
                        <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                            SK
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                My Songs
            </div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard info={item} playSound={() => {}} />;
                })}
            </div>
        </div>
       
    </div>);
}


export default MyMusic;