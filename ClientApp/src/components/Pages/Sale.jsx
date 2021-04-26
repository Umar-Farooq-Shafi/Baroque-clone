import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

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
                    </div>
            }
        </>
    );
};

export default connect()(Sale);
