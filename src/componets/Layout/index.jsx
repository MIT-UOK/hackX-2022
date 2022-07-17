
function Layout({ children, bgColorClassName }) {
    return (

        <div className={bgColorClassName}>
            <section className='md:h-screen container mx-auto'>
                {children}
            </section>
        </div>
    );
}

export default Layout;