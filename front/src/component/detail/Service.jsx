import React,{ useState } from 'react';

function Service() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 이곳에서 폼 데이터를 처리하는 로직을 작성합니다.
        console.log('Form submitted:', { name, email, message });
        // 폼 제출 후 입력 필드 초기화
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <footer>
            <h2>Contact Customer Service</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </footer>
    );
}

export default Service;