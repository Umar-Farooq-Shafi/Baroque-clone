import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import data from '../../store/data';
import SaleDetails from './SaleDetails';

const Sale = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
    });

    return (
        <>
            {
                !isLoading ? <div className="md:container md:mx-auto pt-10 px-28 animate-pulse">
                    Loading...
            </div>
                    : <div>
                        <div className="md:container md:mx-auto pt-10 px-28">
                            <Link to="/" className=" inline-block">
                                Home
                    </Link>
<<<<<<< HEAD
                    <div className="px-2 mt-5 text-gray-200 inline-block">
                        <FiChevronRight />
                    </div> 
                    <div className="inline-block text-gray-200">Sale</div>
                    <hr className="m-5"/>
                </div>
                
                <div className="md:container md:mx-auto pt-5 grid grid-cols-3 gap-4">
                    <div className=""><img src={data.pic}/></div>
                    <div className="col-span-2">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            data.map((d, i) => <SaleDetails 
                            oldPic={d.oldPic} pic={d.pic}
                            name={d.name} oldPrice={d.oldPrice} price={d.price} key={i} />)
                        }                               
                    </div>
=======
                            <div className="px-2 mt-5 text-gray-200 inline-block">
                                <FiChevronRight />
                            </div>
                            <div className="inline-block text-gray-200">Sale</div>
                            <hr className="m-5" />
                        </div>

                        <div className="md:container md:mx-auto pt-5 grid grid-cols-3 gap-4 px-28">
                            <div className="">6</div>
                            <div className="col-span-2">
                                <div class="grid grid-cols-3 gap-4">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>

                                </div>
                            </div>
                        </div>
>>>>>>> 3ac216b16852c4088e0475b2a777a4f906c1b2b6
                    </div>
            }
        </>
    );
};

export default connect()(Sale);
