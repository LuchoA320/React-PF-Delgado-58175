export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return <>{loading ? <h2>Loading...</h2> : <h3>Loaded succesfully</h3>}</>;
};
