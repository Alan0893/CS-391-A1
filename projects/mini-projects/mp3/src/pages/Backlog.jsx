import styled from 'styled-components';
import Task from '../components/Task';
import useDataFetching from '../hooks/useDataFetching';

const BacklogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`;
const BacklogH2 = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #5f43b2;
`;
const TasksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%;
`;

function Backlog() {
    const [loading, error, tasks] = useDataFetching(
        'https://my-json-server.typicode.com/alan0893/CS-391-A1/tasks',
    );

    return (
        <BacklogWrapper>
            <BacklogH2>Backlog</BacklogH2>
            <TasksWrapper>
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map((task) => (
                        <Task id={task.id} key={task.id} title={task.title} body={task.body} />
                    ))
                )}
            </TasksWrapper>
        </BacklogWrapper>
    );
}
export default Backlog;