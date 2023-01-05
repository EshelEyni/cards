export const Card = ({ card: { id, status, serial, identifier, title, completion, code, createdAt }
}) => {

    console.log(id);

    return (
        <article className={"card " + status}>
            <header>
                <span className={"status " + status}>{status}</span>
                <span>{serial}</span>
                <span>{identifier}</span>
            </header>
            <main>
                <p>{title}</p>
            </main>
            <footer className={status}>
                <div>
                    <span className="footer-title">Completion</span>
                    <span>{completion}</span>
                </div>
                <div>
                    <span className="footer-title">Code</span>
                    <span>{code}</span>
                </div>
                <div>
                    <span className="footer-title">AD</span>
                    <span>{createdAt}</span>
                </div>
            </footer>

        </article>
    );
}