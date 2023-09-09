import logo from '../logo.png'
import IconText from '../components/shared/IconText';
import { Icon } from "@iconify/react";

const Home = () => {
    return (<div className="h-full w-full flex">
        {/* left panel */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            <div>

                {/* logo */}
                <div className="logo p-5 w-full flex items-center justify-center">
                    <img src={logo} width="60" height="60" className="mr-2" alt="logo" />
                    <h1 className="text-2xl font-semibold text-center text-white">Musiverse</h1>

                </div>
                <div className='pt-5'>

                    <IconText
                        iconName={"material-symbols:home"}
                        displayText={"Home"}
                        active
                    />
                    <IconText
                        iconName={"material-symbols:search-rounded"}
                        displayText={"Search"}
                    />
                    <IconText
                        iconName={"icomoon-free:books"}
                        displayText={"Library"}
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
            {/* right panel */}
            <div className="px-5">
                <div className="border border-gray-400 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="carbon:earth-europe-africa" />
                    <div className="ml-2 text-sm font-semibold">
                        English
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default Home;